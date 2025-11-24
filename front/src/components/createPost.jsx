import { useForm } from "react-hook-form"
import fetchingPost from "../server-client-fnk/fetching-post"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Navigate, useNavigate } from "react-router-dom"
import globalStore from "../reduce/global-store"

export default function createPost() {
    const navigation = useNavigate()
    const QueryClient = useQueryClient()
    const logFT = globalStore(state => state.logFT)

    const {
        register,
        handleSubmit,
        formState: { errors , isValid },
        reset,
    } = useForm({
        mode: 'onChange',
    })

    const {mutate , isPending} = useMutation({
        mutationKey: ['create post'],
        mutationFn: (newPost) => fetchingPost(newPost),
        onError:()=>{
            alert('ошибка при запросе')
        },
        onSuccess:()=>{
            alert('успешно')
            QueryClient.invalidateQueries({queryKey: ['posts']})
        }
    })

    if(!logFT) return <Navigate to="/" replace/>

    function submit (data) {
        mutate({
            title: data.title,
            body: data.body,
            userId: 1
        })
        reset()
    }

    function back() {
        navigation(-1)
    }

    return (
        <>
            <button className="ferr" onClick={back}>назад{'('}</button>
            <div className="dede">
                <form className="Form2" onSubmit={handleSubmit(submit)}>
                    <h1 style={{marginTop:'100px'}}>создать пост</h1>
                    <input type="text" placeholder="заголовок поста" {...register('title' , {
                        required: {
                            value: true,
                            message: 'поле не должно быть пустым'
                        },
                        minLength: {
                            value: 6,
                            message: 'минимум 6 символа'
                        }
                    })}/>

                    {errors.title && <p>{errors.title.message}</p>}

                    <textarea type="text" placeholder="его содержание" {...register('body' , {
                        required: {
                            value: true,
                            message: 'поле не должно быть пустым'
                        },
                        minLength: {
                            value: 15,
                            message: 'минимум 15 символов'
                        },
                        maxLength: {
                            value: 1000,
                            message: 'максимум 1000 символов'
                        }
                    })}/>

                    {errors.body && <p>{errors.body.message}</p>}

                    <button disabled={!isValid}>создать</button>
                </form>
            </div>
        </>
        
    )
}