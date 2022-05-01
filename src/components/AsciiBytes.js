import AsciiByte from "./AsciiByte";

function AsciiBytes(props) {
  return (
    <div>
      {props.value.map((byte, index) =>
        <AsciiByte value={byte} key={index + "-" + byte}/>
      )}
    </div>
  );
}

export default AsciiBytes;
