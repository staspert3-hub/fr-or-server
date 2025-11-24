import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ContextGlobal } from "../context";
import globalStore from "../reduce/global-store";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

function reg() {
    const navigation = useNavigate();
    const Con = globalStore()

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: 'onChange'
    })

    function handleSubmit1(data) {
        Con.setLogin(data.login)
        alert('все удачно')
        navigation('/' , {replace: true})
    }

    return (
        <>
            <button className="fer" onClick={back}>назад{'('}</button>
            <div className="dede">
                <h1>регистрация</h1>
                <form className="Form2" onSubmit={handleSubmit(handleSubmit1)}>

                    <input type="login" placeholder="login" {...register('login' , {
                        required: {
                            value: true,
                            message: 'поле не должно быть пустым'
                        },
                        pattern: {
                            value: /^[A-Za-z]+$/i,
                            message: 'логин только на английском и без цифр',
                        },
                        minLength: {
                            value: 3,
                            message: 'минимум 3 символа',
                        }
                    })} />

                    {errors.login && <p>{errors.login.message}</p>}

                    <input type="password" placeholder="password" {...register('password',{
                        required: {
                            value: true,
                            message: 'Введите пароль'
                        },
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.!@#$%^&*])[A-Za-z\d.!@#$%^&*]{8,}$/,
                            message: "Пароль должен содержать 8+ символов, заглавную, строчную букву, цифру и спецсимвол"
                        },
                    })}/>

                    {errors.password && <p>{errors.password.message}</p>}

                    <button>зарегистрироваться</button>
                </form>
            </div>
        </>
    )

    function back() {
        navigation('/')
    }
}

export default reg