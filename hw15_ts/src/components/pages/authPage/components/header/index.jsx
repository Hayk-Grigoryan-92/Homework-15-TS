import './style.scss'

export const Header = () => {

    function handleClick(){
        localStorage.clear('loginToken')
        window.location.reload()
    }

    return (
        <div className='header'>
            <div className='content'>
            <h2>Authorized Page</h2>
            <li onClick={handleClick}>Log Out</li>
            </div>
            
        </div>
    )
}