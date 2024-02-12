import React, { useState } from 'react';
import '../index.css'; 

const Dropdown = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="expanding-box" onClick={handleToggle}>
      <div className="expanding-box-header">{title}</div>
      {expanded && <div className="expanding-box-content">{content}  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
        malesuada, tellus nec aliquet interdum, turpis massa vulputate felis,
        non facilisis nulla tortor eu nulla. Nunc in nisi mauris. Vivamus auctor
        tortor quis nunc aliquet, consectetur semper turpis hendrerit.
        Pellentesque et aliquam urna. Proin in elit vestibulum urna vehicula
        auctor. Sed non diam odio. Cras non eleifend leo. Pellentesque in nibh
        eu enim semper luctus. Vivamus vel hendrerit lectus. Ut quis justo sit
        amet diam tristique cursus. Cras luctus varius molestie. Sed luctus
        vulputate urna cursus ornare. Vivamus faucibus in ex at commodo. Quisque
        feugiat tellus at enim eleifend dictum. Integer aliquam erat suscipit
        tellus consequat, vitae placerat leo elementum. Cras est augue, rhoncus
        eu lorem in, interdum imperdiet lorem. Nam scelerisque tincidunt augue,
        a condimentum nunc vulputate in. Vivamus nunc nunc, pharetra nec ex
        sodales, maximus eleifend eros. Vestibulum finibus lacinia malesuada.
        Donec id condimentum dui, ac finibus elit. Vivamus nec quam eget velit
        placerat suscipit. Ut posuere interdum nisi, non aliquet ligula
        consequat vitae. In hendrerit nunc vel enim consectetur iaculis. Nullam
        molestie facilisis tortor. Ut auctor at orci eget molestie. Etiam
        pharetra nisl ut accumsan semper. Mauris at dapibus tortor, nec
        ultricies metus. Duis scelerisque diam nec risus pellentesque faucibus.
        Sed sed blandit mauris. Vivamus congue magna non tristique accumsan.</div>}
      
    </div>
  );
};

export default Dropdown;