import { TbHeart } from 'react-icons/tb'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

const HelloWorld = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <TbHeart className="h-6 w-6 text-red-500" />
            Hello, World!
          </CardTitle>
          <CardDescription>Welcome to your new React + TypeScript + Vite app</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-center">
            <p className="text-sm text-muted-foreground">This app is built with:</p>
            <div className="flex flex-wrap justify-center gap-2 text-xs">
              <span className="rounded bg-blue-100 px-2 py-1 text-blue-800">React</span>
              <span className="rounded bg-blue-100 px-2 py-1 text-blue-800">TypeScript</span>
              <span className="rounded bg-green-100 px-2 py-1 text-green-800">Vite</span>
              <span className="rounded bg-purple-100 px-2 py-1 text-purple-800">Tailwind CSS</span>
              <span className="rounded bg-orange-100 px-2 py-1 text-orange-800">shadcn/ui</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default HelloWorld
