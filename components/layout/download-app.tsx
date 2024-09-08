import Link from "next/link"
import Image from "next/image"

const downloads: Array<{ text: string, img: string, link: string }> = [
  { text: "Download on playstore", img: "/google-play.svg", link: "/coming soon"},
  { text: "Download on app store", img: "/app-store.svg", link: "/coming soon"},
]

export default function DownloadApps(): React.JSX.Element {
    return (
        <div className="flex gap-2 mt-2">
                {downloads.map((download, index) => (
                  <Link
                    key={index}
                    href={download.link}
                    className="rounded-md w-fit h-fit overflow-hidden"
                  >
                    <Image
                      src={download.img}
                      blurDataURL={download.img}
                      alt={download.text}
                      width={200}
                      height={180}
                      className="relative z-[1] object-cover h-auto hover:scale-105 duration-300"
                    />
                  </Link>
                ))}
              </div>
    )
}