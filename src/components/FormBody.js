import Button from "./UI/Button";
import Card from "./UI/Card";
// import Input from "./UI/Input";
import Wrapper from "./UI/Wrapper";

const FormBody = () => {
  return (
    <Wrapper>
      <Card>
        {/* <Input id="Name" /> */}
        <Button type="success" className="btn-green" />
      </Card>
    </Wrapper>
  );
};

export default FormBody;
