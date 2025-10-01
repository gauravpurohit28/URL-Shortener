import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Login = () => {
  return (
<Card>
  <CardHeader>
    <CardTitle>Login</CardTitle>
    <CardDescription>to your account if you already have one</CardDescription>
    <CardAction>Card Action</CardAction>
  </CardHeader>
  <CardContent className="space-y-2">
    <div className='space-y-1'>
        <Input name="email" type="email" placeholder="Enter Email"/>
    </div>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
  )
}

export default Login