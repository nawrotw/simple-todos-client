import { TextField, Button, styled, InputAdornment, IconButton } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

import { FormEvent, forwardRef } from "react";

export const Form = styled('form')`
    display: flex;
`;

export interface AddTodoProps {
  id?: number;
  text: string;
  onTextChange: (value: string) => void;
  onTextClear?: () => void;
  onAdd: (value: string) => void;
  onSave: (todoId: number, text: string) => void;
}

export const AddTodo = forwardRef<HTMLInputElement, AddTodoProps>((props: AddTodoProps, ref) => {
  const { id, text, onTextChange, onTextClear, onAdd, onSave } = props;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id) {
      onSave(id, text);
      return;
    }
    onAdd(text);
  }

  return <div>
    <Form onSubmit={handleSubmit} sx={{ width: "100%" }}>
      <TextField
        inputRef={ref}
        id="newTodo"
        autoFocus
        autoComplete="off"
        value={text}
        onChange={e => onTextChange(e.target.value)}
        label="What needs to be done?"
        size='small'
        sx={{ flex: 1, mr: 0 }}
        InputProps={{
          sx: {pr: 0},
          endAdornment: onTextClear && <InputAdornment position="start">
            <IconButton onClick={onTextClear} size='small'>
              <ClearIcon fontSize='small'/>
            </IconButton>
          </InputAdornment>,
        }}
      />
      <Button
        type="submit"
        sx={{ marginLeft: '5px', width: '20%' }}
        variant='contained'
      >
        {id ? 'Save' : 'Add Todo'}
      </Button>
    </Form>
  </div>
})
