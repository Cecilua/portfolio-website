export default function LoadHTML({src, title}:{ src: string, title: string }) {
  return (
    <div className="flex grow w-full h-full">
      <iframe src={`${import.meta.env.BASE_URL}${src}`} title={title} className="flex grow w-full h-full" />
    </div>
  )
}