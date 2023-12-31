import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
    const error = useRouteError()
    return(
        <div className='space-y-8'>
            <h1 className='text-center text-6xl font-extrabold mt-20 text-blue-900'>Hubo un Error</h1>
            <p className='text-center'>Descripción:</p>
            <p className='text-center'>{error.message || error.statusText}</p>
        </div>
    )
}