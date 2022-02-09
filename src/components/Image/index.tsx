import * as S from './styles'

export function Image({...args}) {
  return (
    <S.Container>
      <S.Image {...args}/>
    </S.Container>
  );
}
