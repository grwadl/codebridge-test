type Props = {
  text: string
  highlightValue: string
}

export const Highlighted = ({ highlightValue, text }: Props) => {
  const splittedText = text.split(new RegExp(`(${highlightValue})`, 'gi'))
  return (
    <>
      {splittedText.map((part, idx) => (
        <span key={idx} className={`${part.toLowerCase() === highlightValue.toLowerCase() ? 'highlighted' : ''}`}>
          {part}
        </span>
      ))}
    </>
  )
}
