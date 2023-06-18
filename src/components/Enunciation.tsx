interface EnunciationProps {
  text: string
}

export default function Enunciation(props: EnunciationProps) {
  return (
    <div className="flex">
      <span className="text-[2.5rem] font-bold">{props.text}</span>
    </div>
  )
}
