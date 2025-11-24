import React, {useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ContextGlobal } from '../context'
import globalStore from '../reduce/global-store'

export default () => {
    const storeLog = globalStore(stase => stase.logout)
    const storeFt = globalStore(stase => stase.logFT)
    const navigation = useNavigate()
    const [state , setState] = useState(false)

    function renderIcon(){
        if(storeFt){
            return <div>
                <div className="Div icon" onClick={() => storeLog()}>выйти</div>
            </div>
        }
        else{
            return <div>
                <div className="Div icon" onClick={() => navigation('/reg')}>войти</div>
            </div>
        }
    }

    function renderCreatePost(){
        if(storeFt){
            return <Link className='Link fef' to='/post/create'>создать пост</Link>
        }
    }

    function renderCreatePost2(){
        if(storeFt){
            return <Link className='LinkC fef' onClick={r} to='/post/create'>создать пост</Link>
        }
    }

    function r (){
        setState(!state)
    }

    return (
        <div className="hider">
            <div className="logo" onClick={r}></div>
            <div className={`bokmenu ${state? 'yes':'no'}`}>
                <div className='close' onClick={() => setState(!state)}>закрыть</div>
                <div className='divclose'>
                    <Link className='LinkC' onClick={r} to={'/'}>Home</Link>
                    <Link className='LinkC' onClick={r} to={'/about'}>About</Link>
                    <Link className='LinkC' onClick={r} to={'/contact'}>Contact</Link>
                    <Link className='LinkC' onClick={r} to={'/posts'}>Posts</Link>
                    {renderCreatePost2()}
                </div>
            </div>
            <nav>
                <Link className='Link' to={'/'}>Home</Link>
                <Link className='Link' to={'/about'}>About</Link>
                <Link className='Link' to={'/contact'}>Contact</Link>
                <Link className='Link' to={'/posts'}>Posts</Link>
                {renderCreatePost()}
            </nav>
            {renderIcon()}
        </div>
    )
}