import Link from "next/link"
import Image from "next/image"

const downloads: Array<{ text: string, img: string, link: string }> = [
  { text: "Download on playstore", img: "/play-store.png", link: "#"},
  { text: "Download on app store", img: "/app-store.png", link: "#"},
]

export default function DownloadApps(): React.JSX.Element {
    return (
        <div className="flex gap-2 mt-2">
                {downloads.map((download, index) => (
                  <Link
                    key={index}
                    href={download.link}
                    className="relative z-0 rounded-md w-fit h-fit overflow-hidden"
                  >
                    <span className="bg-white absolute z-0 inset-y-0.5 inset-x-0.5"></span>
                    <Image
                      src={download.img}
                      blurDataURL={download.img}
                      alt={download.text}
                      width={200}
                      height={180}
                      className="relative z-[1] object-cover hover:scale-105 duration-300"
                    />
                  </Link>
                ))}
              </div>
    )
}