import styled from "styled-components"

const RequiredText = styled.span`
  color: ${({ theme }) => theme.colors.muted};
`

export default function FormField({
  label,
  required = false,
  children,
  className,
}) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <div className="flex flex-wrap space-x-2 text-sm">
        <label className="font-light">{label}</label>
        {required && (
          <>
            <RequiredText className="hidden sm:block font-light">(obrigatório)</RequiredText>
            <RequiredText className="sm:hidden font-light">*</RequiredText>
          </>
        )}
      </div>
      {children}
    </div>
  )
}
