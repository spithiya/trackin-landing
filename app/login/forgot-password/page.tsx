'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const inputCls =
  'w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0D65F2] focus:border-transparent'

export default function ForgotPasswordPage() {
  const [identifier, setIdentifier] = useState('')
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('This isn’t available from the landing page yet — reach out to us directly and we’ll help you in.')
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-sm">
        <Link
          href="/login"
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition-colors mb-6"
        >
          <ArrowLeft size={14} />
          Back to sign in
        </Link>

        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#0F172A] mb-1">Reset Password</h1>
          <p className="text-sm text-gray-500">Enter your email or username to get started.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">{error}</p>
          )}

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Email or Username</label>
            <input
              type="text"
              value={identifier}
              onChange={e => setIdentifier(e.target.value)}
              placeholder="you@example.com or username"
              required
              autoFocus
              autoComplete="username"
              className={inputCls}
            />
          </div>

          <Button type="submit" size="lg" className="w-full">
            Send Reset Link
          </Button>
        </form>
      </div>
    </div>
  )
}
