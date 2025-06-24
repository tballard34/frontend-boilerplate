import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import HelloWorld from '../HelloWorld'

describe('HelloWorld', () => {
  it('renders hello world message', () => {
    render(<HelloWorld />)

    expect(screen.getByText('Hello, World!')).toBeInTheDocument()
    expect(screen.getByText('Welcome to your new React + TypeScript + Vite app')).toBeInTheDocument()
  })

  it('displays technology stack badges', () => {
    render(<HelloWorld />)

    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Vite')).toBeInTheDocument()
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument()
    expect(screen.getByText('shadcn/ui')).toBeInTheDocument()
  })

  it('renders a heart icon', () => {
    render(<HelloWorld />)

    const heartIcon = document.querySelector('svg')
    expect(heartIcon).toBeInTheDocument()
  })
})
