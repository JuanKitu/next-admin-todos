import {redirect} from "next/navigation";

export default function Home() {
    redirect('/dashboard');
  return (
   <>
       <div className="bg-blue-500 text-white p-6">Tailwind anda 🎉</div>
   </>
  )
}
