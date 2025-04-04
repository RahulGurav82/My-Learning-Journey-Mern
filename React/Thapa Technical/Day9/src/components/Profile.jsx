import React from 'react'

const Profile = () => {
  return (
    <div>
        <ProfileCard 
        name = "Rahul"
        age = {21}
        greeting = {
            <div>
                <strong>Hello Rahul Keep Going</strong>
            </div>
        }
        >
            <p>Hobbies : Gaming, Cooking </p>
            <button>Contact</button>
        </ProfileCard >
    </div>
  )
}

export default Profile

function ProfileCard({ name, age, greeting, children }) {
    // const { name, age, greeting, children } = props;
    return (
        <>
            <h2>Name : {name}</h2>
            <p>Age : {age}</p>
            <p>{greeting}</p>
            <div>{children}</div>
        </>
    )
}