import { useRef, useEffect } from 'react';

const AccordionItem = ({ title, description, link, isOpen, onClick }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
      contentRef.current.style.opacity = '1';
      contentRef.current.style.padding = '0.5rem';
    } else {
      contentRef.current.style.maxHeight = '0';
      contentRef.current.style.opacity = '0';
      contentRef.current.style.padding = '0 0.5rem';
    }
  }, [isOpen]);

  return (
      <div className="accordion-item" onClick={onClick}>
          <div className="accordion-title">
              <div>{title}</div>
              <div>{isOpen ? '-' : '+'}</div>
          </div>
            <div className={`accordion-content`} ref={contentRef}>
                {description}
                <br />
                <a href={link}>Live Demo</a>
            </div>
      </div>
  );
}

export default AccordionItem;