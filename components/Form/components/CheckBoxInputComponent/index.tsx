import { color } from "@/styles/color";
import { spacing } from "@/styles/spacing";
import * as React from "react";
import styled from "styled-components";

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  error?: boolean;
}
const SIZE = "18px";
const PADDING = "2px";
const BORDER_WIDTH = "1px";

const CheckBoxStyled = styled.div`
  display: flex;
  align-items: center;
`;

const InputStyled = styled.input<{ $error: boolean }>`
  margin-right: ${spacing.s};
  accent-color: ${color.primary};
  border: ${BORDER_WIDTH} solid ${({ $error }) => ($error ? color.red : color.primary)};
  appearance: none;
  width: ${SIZE};
  height: ${SIZE};
  border-radius: 2px;
  position: relative;
  cursor: pointer;

  &:checked {
    &::after {
      content: "";
      background-color: ${color.black};
      border-radius: 2px;
      width: calc(${SIZE} - (${PADDING} * 2) - ${BORDER_WIDTH} * 2);
      height: calc(${SIZE} - (${PADDING} * 2) - ${BORDER_WIDTH} * 2);
      position: absolute;
      left: ${PADDING};
      top: ${PADDING};
    }
  }
`;

export function CheckBoxInputComponent({ checked, id, onChange, error = false }: CheckBoxProps) {
  return (
    <CheckBoxStyled>
      <InputStyled $error={error} id={id} type="checkbox" onChange={onChange} checked={checked} />
    </CheckBoxStyled>
  );
}
