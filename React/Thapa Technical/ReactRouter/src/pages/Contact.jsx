import React from 'react'
import { Form } from 'react-router-dom';


export const GetFormData = async ({ request }) => {
  try {
      // const res = await req.FormData();
      console.log(request)
      return null;
  } catch (error) {
    console.log(error)
  }
}

const Contact = () => {
  return (
    <section>
      <Form method="POST" action="/contact">
          <input type="text" name='name' placeholder='Full Name' />

          <input type="email" name="email" placeholder='Email' id="" />

          <textarea name="messge" id="" placeholder='message'></textarea>

          <button type='submit'>submit</button>
      </Form>
    </section>
  )
}

export default Contact