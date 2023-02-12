import React from 'react'

const Testimonials = () => {
  return (
    <section className="bg-gray-200">
    
    <div className="container mx-auto max-w-7xl p-2 md:10">
      
      <div className="grid gap-6 grid-cols-1 text-white md:grid-cols-4 md:grid-rows-2">
      
        <div className="relative p-10 rounded-xl bg-greenVariant md:col-span-2">
     
          <img
            src="images/bg-pattern-quotation.svg"
            alt=""
            className="absolute top-3 right-8 scale-125 md:top-7 md:right-24 md:scale-150"
          />
        
          <div className="flex z-10 space-x-4">
            <img
              src="https://images.pexels.com/photos/4762744/pexels-photo-4762744.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="w-12 h-12 rounded-full ring-3 ring-purple-300 hover:scale-110"
            />
            <div className="text-sm">
              <h4 className="opacity-90">Sharon </h4>
              <p className="opacity-50">Verified Graduate</p>
            </div>
          </div>
          
          <p className="relative z-10 mt-6 text-xl">
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis necessitatibus in facilis placeat. Modi, ipsa!
          </p>
         
          <p className="mt-6 opacity-50 line-clamp-6">
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum atque explicabo maxime nostrum. Excepturi facere sapiente iste, sed porro praesentium, laudantium dolor aperiam veritatis optio quaerat impedit. Perferendis, maxime omnis."
          </p>
        </div>
            <div className="p-10 rounded-xl bg-darkBlue1">
              
              <div className="flex space-x-4">
                <img
                  src="https://images.pexels.com/photos/6217815/pexels-photo-6217815.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-12 h-12 rounded-full ring-3 ring-purple-300 hover:scale-110"
                />
                <div className="text-sm">
                  <h4 className="opacity-90">Adeayo</h4>
                  <p className="opacity-50">Verified Graduate</p>
                </div>
              </div>
             
              <p className="mt-6 text-xl">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, quod?
              </p>
              
              <p className="mt-6 opacity-50">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe commodi magni quo fugit quae maxime suscipit voluptas dolorum id provident."
              </p>
            </div>
            
            
            <div className="hidden p-10 rounded-xl text-slate-800 bg-greenVariant md:block md:row-span-2">
              
              <div className="flex space-x-4">
                <img
                  src="https://images.pexels.com/photos/6217803/pexels-photo-6217803.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-12 h-12 rounded-full ring-3 ring-purple-300 hover:scale-110"
                />
                <div className="text-sm">
                  <h4 className="opacity-90">Chioma</h4>
                  <p className="opacity-50">Verified Graduate</p>
                </div>
              </div>
             
              <p className="mt-6 text-xl">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta ipsa nisi.
              </p>
              
              <p className="mt-6 opacity-50">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, cum accusamus error consequatur, ullam quidem voluptate quas fugiat ab doloremque sed! Qui nostrum recusandae voluptatum itaque culpa, soluta corrupti ratione!""
              </p>
            </div>

<div className="p-10 rounded-xl text-white bg-darkBlue1">
 
  <div className="flex space-x-4">
    <img
      src="https://images.pexels.com/photos/6978005/pexels-photo-6978005.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt=""
      className="w-12 h-12 rounded-full ring-3 ring-purple-300 hover:scale-110"
    />
    <div className="text-sm">
      <h4 className="opacity-90">Jamal</h4>
      <p className="opacity-50">Verified Graduate</p>
    </div>
  </div>

  <p className="mt-6 text-xl">
    Lorem ipsum dolor sit amet.
  </p>

  <p className="mt-6 opacity-50">
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquam porro, ex doloribus optio nemo"
  </p>
</div>
 <div className="p-10 rounded-xl bg-darkBlue1 text-white md:col-span-2">

  <div className="flex space-x-4">
    <img
      src="https://images.pexels.com/photos/8791117/pexels-photo-8791117.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt=""
      className="w-12 h-12 rounded-full ring-3 ring-purple-300 hover:scale-110"
    />
    <div className="text-sm">
      <h4 className="opacity-90">David</h4>
      <p className="opacity-50">Verified Graduate</p>
    </div>
  </div>
  <p className="mt-6 text-xl">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, assumenda.
  </p>
  
  <p className="mt-6 opacity-50">
   "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus unde dicta earum necessitatibus, maiores commodi inventore ipsam sapiente porro explicabo excepturi delectus dolorem alias rem?"
  </p>
</div>
      <div className="p-10 rounded-xl text-slate-800 bg-white md:hidden">
        <div className="flex space-x-4">
          <img
            src="https://images.pexels.com/photos/9653757/pexels-photo-9653757.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="w-12 h-12 rounded-full ring-3 ring-purple-300 hover:scale-110"
          />
          <div className="text-sm">
            <h4 className="opacity-90">Bola</h4>
            <p className="opacity-50">Verified Graduate</p>
          </div>
        </div>
        <p className="mt-6 text-xl">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, inventore?
        </p>
        <p className="mt-6 opacity-50">
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum itaque officiis doloribus veritatis debitis laudantium. Sint quidem similique repellendus quaerat et illo ipsam animi soluta."
        </p>
      </div>            
      </div>
    </div>
  </section>
  )
}

export default Testimonials