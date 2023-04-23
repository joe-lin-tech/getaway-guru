import React from 'react'

function Card(props) {
        console.log("HI FROM CARD")
        return (
                <a href="#" className="block bg-white rounded-xl">
                        <img
                                alt={props.alt}
                                src={props.src}
                                class="h-64 w-full object-cover sm:h-80 lg:h-96 p-0"
                        />
                        <div className="p-2">
                        <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                                {props.name}
                        </h3>

                        <p class="mt-2 max-w-sm text-gray-700">
                                {props.city}
                        </p>

                        <p class="mt-2 max-w-sm text-gray-700">
                                {props.numberOfLikes} likes
                        </p>
                        </div>
                        
                </a>
        )
}

export default Card;