import Image from "next/image";

export default function SuitableFor(){
    return (
        <section className="pt-12">
            <div>
                <h2 className="font-bold text-4xl text-center">Static sites are best suited for</h2>
            </div>
            <Image 
                src="/img/static _sites_are _best _suited_for.webp"
                alt="Static Sites are best suited for"
                width={1440}
                height={500}
                className="w-full"
            />
        </section>
    )
}