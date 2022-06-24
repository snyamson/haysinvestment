import { useState } from 'react';

const navItems = [
  {
    label: {
      name: 'Home',
      number: '01',
    },
    route: '/',
  },
  {
    label: {
      name: 'About',
      number: '02',
    },
    route: '/about',
  },
  {
    label: {
      name: 'Services',
      number: '03',
    },
    route: '/services',
  },
  {
    label: {
      name: 'Projects',
      number: '04',
    },
    route: '/projects',
  },
  {
    label: {
      name: 'Contact',
      number: '05',
    },
    route: '/contact',
  },
];

const Navigation = () => {
  const [selectedRoute, setSelectedRoute] = useState('/');

  return (
    <nav id="colorlib-main-nav" className="border" role="navigation">
      <a
        href="#"
        className="js-colorlib-nav-toggle colorlib-nav-toggle active "
      >
        <i></i>
      </a>
      <div className="js-fullheight colorlib-table">
        <div
          className="img"
          style={{
            backgroundImage: 'url(/images/bg_2.jpg)',
          }}
        ></div>
        <div className="colorlib-table-cell js-fullheight">
          <div className="row no-gutters">
            <div className="col-md-12 text-center">
              <h1 className="mb-4">
                <a href="/" className="logo">
                  Hays-Investment
                </a>
              </h1>
              <ul>
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className={selectedRoute === item.route ? 'active' : null}
                    onClick={async () => {
                      await setSelectedRoute(item.route);
                      console.log(selectedRoute);
                    }}
                  >
                    <a href={item.route}>
                      <span>
                        <small>{item.label.number}</small>
                        {item.label.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
