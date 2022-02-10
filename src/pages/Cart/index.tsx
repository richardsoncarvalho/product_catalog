import { Card } from "../../components/Card";
import { Order } from "../../components/Order";
import { Table } from "../../components/Table";
import { Container } from "./styles";
import { useCartProvider } from '../../hooks/useCartProvider';
import { WrapperBlank } from "../../components/Blank/styles";
import { FaShoppingBasket } from "react-icons/fa";

export function Cart() {
  const { cart } = useCartProvider()

  return (
    <Container>
      <Card>
        <>
          {cart.length !== 0 && (
            <Table />
          )}

          {cart.length === 0 && (
            <WrapperBlank>
              <FaShoppingBasket size={28} />
              sua sacola está vazia
            </WrapperBlank>
          )}
        </>
      </Card>

      <Card>
        <Order />
      </Card>
    </Container>
  );
}
