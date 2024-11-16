<script>
    import {routes} from '$lib/routes';
    let {children} = $props();
</script>

<nav>
    <!-- Hidden checkbox for toggling the menu -->
    <input type="checkbox" id="menu-toggle" class="menu-toggle-checkbox">
        
    <!-- Hamburger icon (label) -->
    <label for="menu-toggle" class="menu-toggle">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </label>
    
    <!-- Navbar Links -->
    <ul>
        {#each routes as {name, path}}
            <li><a href={path}>{name}</a></li>
        {/each}
    </ul>
</nav>

{@render children()}


<style>
    /* Reset some basic styles */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* Navbar styling */
    nav {
        background: linear-gradient(135deg, #6a11cb, #2575fc);
        padding: 15px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }

    /* Navbar Links */
    nav ul {
        list-style-type: none;
        display: flex;
    }

    nav ul li {
        margin-left: 20px;
    }

    nav ul li a {
        color: #fff;
        text-decoration: none;
        font-weight: 600;
        letter-spacing: 0.5px;
        padding: 8px 16px;
        border-radius: 5px;
        transition: background-color 0.3s ease, transform 0.3s ease;
    }

    nav ul li a:hover {
        background-color: #f5f5f5;
        color: #333;
        transform: translateY(-3px);
    }

    /* Hamburger Menu (Mobile) */
    .menu-toggle {
        display: none;
        flex-direction: column;
        justify-content: space-between;
        width: 30px;
        height: 25px;
        cursor: pointer;
    }

    .menu-toggle .bar {
        height: 4px;
        width: 100%;
        background-color: white;
        border-radius: 5px;
    }

    /* Hide navbar links by default on mobile */
    nav ul {
        display: flex;
    }

    /* Checkbox for toggling the menu (hidden) */
    .menu-toggle-checkbox {
        display: none;
    }

    /* Mobile view */
    @media screen and (max-width: 768px) {
        /* Navbar links initially hidden on mobile */
        nav ul {
            display: none;
            position: absolute;
            top: 60px;
            right: 20px;
            background: linear-gradient(135deg, #6a11cb, #2575fc);
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            width: 200px;
        }

        /* Display the hamburger icon (label) */
        .menu-toggle {
            display: flex;
        }

        /* When the checkbox is checked, show the links */
        .menu-toggle-checkbox:checked + .menu-toggle + ul {
            display: block;
        }

        nav ul li {
            text-align: center;
            padding: 12px 0;
        }

        nav ul li a:hover {
            background-color: #f5f5f5;
            color: #333;
            transform: translateX(10px);
        }
    }

</style>