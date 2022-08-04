import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DefaultContext = createContext();

const DefaultProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem('user') || '');
  const [products, setProducts] = useState([
    {
      name: "Momo's style Ajwaini Parantha",
      image:
        'https://images.myupchar.com/583/original/dalchini-ke-fayde-aur-nuksan-in-hindi-1.jpg',
      description: "Ajwain has such a tantalizing taste that it's a must try!",
      price: '150',
      id: '1',
    },
    {
      name: "Momo's style Ajwaini Parantha",
      image:
        'https://images.myupchar.com/583/original/dalchini-ke-fayde-aur-nuksan-in-hindi-1.jpg',
      description: "Ajwain has such a tantalizing taste that it's a must try!",
      price: '150',
      id: '2',
    },
    {
      name: "Momo's style Ajwaini Parantha",
      image:
        'https://images.myupchar.com/583/original/dalchini-ke-fayde-aur-nuksan-in-hindi-1.jpg',
      description: "Ajwain has such a tantalizing taste that it's a must try!",
      price: '150',
      id: '3',
    },
    {
      name: "Momo's style Ajwaini Parantha",
      image:
        'https://images.myupchar.com/583/original/dalchini-ke-fayde-aur-nuksan-in-hindi-1.jpg',
      description: "Ajwain has such a tantalizing taste that it's a must try!",
      price: '150',
      id: '4',
    },
    {
      name: "Momo's style Ajwaini Parantha",
      image:
        'https://images.myupchar.com/583/original/dalchini-ke-fayde-aur-nuksan-in-hindi-1.jpg',
      description: "Ajwain has such a tantalizing taste that it's a must try!",
      price: '150',
      id: '5',
    },
    {
      name: "Momo's style Ajwaini Parantha",
      image:
        'https://images.myupchar.com/583/original/dalchini-ke-fayde-aur-nuksan-in-hindi-1.jpg',
      description: "Ajwain has such a tantalizing taste that it's a must try!",
      price: '150',
      id: '6',
    },
    {
      name: "Momo's style Ajwaini Parantha",
      image:
        'https://images.myupchar.com/583/original/dalchini-ke-fayde-aur-nuksan-in-hindi-1.jpg',
      description: "Ajwain has such a tantalizing taste that it's a must try!",
      price: '150',
      id: '7',
    },
  ]);

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );

  useEffect(() => {
    if (user.length !== 0) {
      localStorage.setItem('user', user);
    }
  }, [user]);

  useEffect(() => {
    if (cart.length !== 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <DefaultContext.Provider
      value={{ user, setUser, products, setProducts, cart, setCart }}
    >
      {children}
    </DefaultContext.Provider>
  );
};

export const DefaultState = () => {
  return useContext(DefaultContext);
};

export default DefaultProvider;
