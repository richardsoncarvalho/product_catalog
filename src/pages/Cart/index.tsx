import { Card } from "../../components/Card";
import { Order } from "../../components/Order";
import { Table } from "../../components/Table";
import { Container } from "./styles";

export function Cart() {
  return (
    <Container>
      <Card>
        <Table />
      </Card>

      <Card>
        <Order />
      </Card>
    </Container>
  );
}
