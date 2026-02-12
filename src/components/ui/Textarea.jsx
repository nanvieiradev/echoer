import styled from "styled-components"

const TextAreaWrapper = styled.textarea`
  background-color: ${({ theme }) => theme.colors.input};
  color: ${({ theme }) => theme.colors.muted};
  border: 1px solid ${({ theme }) => theme.colors.ring};
  padding: 0.75rem; /* p-3 */
  font-size: 1rem;
`

export default function Textarea() {
  return (
    <TextAreaWrapper
      cols="30"
      rows="3"
      maxLength={2000}
      className="focus:outline-2 focus:outline-offset-2 min-h-24.5 max-h-64 transition-colors"
    />
  )
}
