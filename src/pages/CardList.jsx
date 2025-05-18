import { Card } from "../components"

export const CardList = () => {
  
  const items = [
  {
 
      id: 1,
      name: "P9",
      discription: "A new way of headset",
      price: 140,
      image_path:
        "https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "I-tone",
      discription: "Easy to use",
      price: 140,
      image_path:
        "https://images.unsplash.com/photo-1583305727488-61f82c7eae4b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "JBL",
      discription: "simple to use",
      price: 140,
      image_path:
        "https://plus.unsplash.com/premium_photo-1706548331061-39efd6912860?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "BoAlT",
      discription: "Way to confort",
      price: 140,
      image_path:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
    ]; 
  
  return (
    <main>
        <section className='mx-w-8xl mx-auto py-7'>
          <div className='flex flex-wrap   justify-center sm_screen:justify-center'>
            {items && items.map((item) => <Card key={item.id} item={item} />
            )}
          </div>

        </section>
    </main>
  )
}
