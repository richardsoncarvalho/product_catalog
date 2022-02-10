import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Provider } from '../../providers/theme';
import { Button } from '../../components/Button';


describe('<Button />', () => {
  it('verifica se renderiza corretamente', () => {
    render(<Button>conteudo</Button>, {
      wrapper: Provider
    })

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument();
  })

  it('verifica acao de click', () => {
    const onClick = jest.fn();

    render(<Button onClick={onClick}>conteudo</Button>, {
      wrapper: Provider
    })

    const button = screen.getByRole('button')

    userEvent.click(button)

    expect(onClick).toHaveBeenCalledTimes(1);
  })

  it('pode renderizar icone', () => {
    const icone = <span>icone</span>
    render(<Button>{icone}</Button>, {
      wrapper: Provider
    })

    const button = screen.getByText("icone")

    expect(button).toBeInTheDocument();
  })
});
