export const highlightText = (text: string, highlightValue: string) => {
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
