import Head from 'next/head'
import Image from 'next/image'
import swr from '../lib/swr';


export default function Home() {
  const { data: _projects } = swr('/api/projects');
  const projects = _projects ? _projects : null;

  return (
    <>
      <div className="py-20">
        <p className="text-3xl text-white font-semibold text-center">Bizimle İletişime geç!</p>
        <p className="text-xl text-white/50 font-normal text-center mb-5">Bu Adreslerden bizler ile iletişime geçebilirsin.</p>
        <div className=" flex justify-center flex-col items-center">
            <div className="max-w-lg w-full">
                <a target="_blank" rel="norefferer" href="https://discord.com/users/935874281575940206">
                    <div className="mt-2 flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fab fa-discord fa-2x" />
                        <p className="font-semibold text-xl">@elomafriztche</p>
                    </div>
                </a>
                    </div>
                </a>
            </div>
        </div>
      </div>
    </>
  )
}
