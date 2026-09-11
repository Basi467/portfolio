import { useEffect, useState } from 'react'

export function useTypewriter(words, { typingSpeed = 80, deletingSpeed = 40, pause = 1600 } = {}) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]

    if (!deleting && subIndex === word.length) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }

    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }

    const t = setTimeout(
      () => setSubIndex((s) => s + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed,
    )
    return () => clearTimeout(t)
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pause])

  return words[index].substring(0, subIndex)
}
