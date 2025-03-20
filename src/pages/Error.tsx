import { Frown } from 'lucide-react'
import { Link, useRouteError } from 'react-router-dom'

export function Error() {
  const error = useRouteError() as Error
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <Frown className="h-12 w-12" />
      <h1 className="text-4xl font-bold"> Whoops, algo aconteceu ...</h1>
      <p className='text-accent-foreground'>
        Um error aconteceu nao aplicação, abaixo você encontra mais detalhes:
      </p>
      <pre>
        {error?.message || JSON.stringify(error)}
      </pre>
      <p>
        Voltar para o{' '}
        <Link to="/" className="text-sky-600 dark:text-sky-400">
          Dashboard
        </Link>
      </p>
    </div>
  )
}
