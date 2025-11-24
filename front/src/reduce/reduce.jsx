export default function reduceLog(state , action) {
    switch (action.type) {
        case 'Login':
            return {
                ...state,
                login: action.hesh,
                logFT:true,
            }
        case 'logout':
            return {
                ...state,
                login: '',
                logFT: false,
            }
    }
}