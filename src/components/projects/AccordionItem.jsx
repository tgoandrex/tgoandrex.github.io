import { useRef, useEffect } from 'react';

const AccordionItem = ({ title, description, link, src, isOpen, onClick }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
      contentRef.current.style.opacity = '1';
      contentRef.current.style.padding = '1rem';
    } else {
      contentRef.current.style.maxHeight = '0';
      contentRef.current.style.opacity = '0';
      contentRef.current.style.padding = '0 1rem';
    }
  }, [isOpen]);

  return (
      <div className="accordion-item" onClick={onClick}>
          <div className="accordion-title">
              <div>{title}</div>
              <div>{isOpen ? '-' : '+'}</div>
          </div>
            <div className={`accordion-content ${isOpen ? "active" : ""}`} ref={contentRef}>
                <div className='accordion-image-container'>
                    <img className='accordion-image' alt='project screenshot' src={src} />
                </div>
                {description}
                <br />
                <a href={link}>Live Demo</a>
            </div>
      </div>
  );
}

export default AccordionItem;