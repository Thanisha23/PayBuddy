import { Button } from "@/components/ui/button"


const Home = () => {
  return (
    <div className="flex flex-col gap-7 justify-center items-center my-[17rem]">

        <a href="/signup"><Button variant="outline">Signup</Button>
</a>
<a href="/signin"><Button variant="outline">Signin</Button>
</a>
    </div>
  )
}

export default Home