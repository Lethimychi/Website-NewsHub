import "./Body.css";

export default function Menu(props) {
  return (
    <>
      <li className="menu-item" style={{ listStyle: "none", color: "white" }}>
        {props.item}
      </li>
    </>
  );
}

