import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/sign-up')({
  component: RouteComponent,
})

function RouteComponent() {

    const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault()

        const formData = new FormData(ev.currentTarget)

        const email = formData.get('email') as string

        alert(email)

    }
  return <div>

    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
        </div>
        <div>
            <label htmlFor="password">Email:</label>
            <input type="password" name="password" id="password" />
        </div>

        <button type='submit'>Create Account</button>
    </form>
  </div>
}
