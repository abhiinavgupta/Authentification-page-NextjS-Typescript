import { NextPageContext } from "next";
import { useSession, signIn, signOut, getSession } from "next-auth/react"



export default function Home() {
  const { data: session } = useSession();
  return (
    <>
    <h2 className='text-red-700 text-lg bg-yellow-300'>
      {session?.user?.name}
      </h2>
      <img 
      src={session?.user?.image!}
      alt=""
      className="w-[128] h-32 rounded-full"></img>
      {session?.user?.email}
      { session ? ( <button onClick={() => signOut()}  className="bg-blue-400">sign out</button> ) : ( <button onClick={() => signIn()} className="bg-blue-400">sign in</button> ) } 
    
    </>
  )
}

export async function getServerSideProps(ctx: NextPageContext) {
  const session = await getSession(ctx);
  return {
    props: {
      session,
    },
  };
}
