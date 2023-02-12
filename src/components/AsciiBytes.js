import AsciiByte from "./AsciiByte";

function AsciiBytes(props) {
  return (
    <div>
      {Array(Math.ceil(props.value.byteLength)).fill(0).map((_, i) =>
        <AsciiByte value={props.value[i]} key={i + "-" + props.value[i]}/>
      )}
    </div>
  );
}

export default AsciiBytes;
