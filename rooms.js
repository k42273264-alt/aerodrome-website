document.addEventListener('DOMContentLoaded', () => {

    // ======================
    // Modal Functionality (if you add "View Details" buttons)
    // ======================
    const modal = document.getElementById('roomModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDetails = document.getElementById('modalDetails');
    const closeModal = document.querySelector('.modal-close');

    // Room details specific to Aerodrome Hotel
    const roomDetails = {
        'classic-single': {
            title: 'Classic Single Room',
            details: '1 Single Bed • Sleeps 1<br><br>Comfortable single room with free Wi-Fi, private bathroom, flat-screen TV, tea & coffee making facilities, hairdryer, and iron/ironing board.'
        },
        'classic-double': {
            title: 'Classic Double Room',
            details: '1 Double Bed • Sleeps 2<br><br>Well-appointed double room offering comfort and convenience with free Wi-Fi, private bathroom, TV, tea/coffee facilities and modern amenities.'
        },
        'classic-twin': {
            title: 'Classic Twin Room',
            details: '2 Single Beds • Sleeps 2<br><br>Ideal for friends, colleagues or families, featuring two single beds, free Wi-Fi, private bathroom and all standard facilities.'
        },
        'executive-double': {
            title: 'Executive Double Room',
            details: '1 Double Bed • Sleeps 2<br><br>Upgraded Executive room with additional space and enhanced amenities, perfect for business travellers and those seeking extra comfort.'
        },
        'family-room': {
            title: 'Family Room',
            details: 'Double Bed + Single Bed • Sleeps 3<br><br>Spacious family room suitable for parents with one child, offering comfortable bedding and all modern facilities.'
        },
        'accessible-room': {
            title: 'Accessible Room',
            details: 'Designed for Accessibility • Sleeps 2<br><br>Fully accessible room with wider doors, adapted bathroom and all necessary facilities for guests with mobility needs.'
        }
    };

    // Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const roomCards = document.querySelectorAll('.room-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');

            // Filter room cards
            roomCards.forEach(card => {
                const type = card.getAttribute('data-type');
                if (filter === 'all' || type === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Animation on Scroll
    const animatedElements = document.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    animatedElements.forEach(element => observer.observe(element));

    // Modal handling (in case you add "Details" buttons later)
    document.querySelectorAll('.details-btn').forEach(button => {
        button.addEventListener('click', () => {
            const roomKey = button.getAttribute('data-room');
            if (roomDetails[roomKey]) {
                modalTitle.textContent = roomDetails[roomKey].title;
                modalDetails.innerHTML = roomDetails[roomKey].details;
                modal.classList.add('active');
            }
        });
    });

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
});