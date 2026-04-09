import TextField from '@mui/material/TextField';

type SearchInputProps = {
  onChange: (value: string) => void;
}

export default function SearchInput({ onChange }: SearchInputProps) {
  return (
    <>
      <TextField margin='normal' label="Search"
        onChange={(e) => onChange(e.target.value)} />
    </>
  )
}