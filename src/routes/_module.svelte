<script>
    import Prism from 'prismjs';
    import 'prism-svelte';
    import {isActive, node} from '@roxi/routify'

    export let pages
    $: liveUrl = index => pages && pages[index]?.router?.url.external()

</script>
<main>
    <nav>
        {#each $node.pages as node, index}
            <section>
                <a href="{node.path}"><h2>{node.meta.title || node.name}</h2></a>
                {#if $isActive(node.path)}
                    <ul>
                        {#each node.children as child}
                            {#if !child.path.includes('/index')}
                                <li class:isActive2={$isActive(child.path)}>
                                    <a href={liveUrl(index) || child.path}>
                                        {child.meta.title || child.name.replace("-", " ")}
                                    </a>
                                </li>
                            {/if}
                        {/each}
                    </ul>
                {/if}
            </section>
        {/each}
    </nav>
    <article>
        <slot></slot>
    </article>
</main>


<style>
    :global(h1) {
        @apply text-3xl font-bold mb-4 capitalize;
    }

    :global(h2) {
        @apply text-base font-bold mb-4 capitalize;
    }

    :global(h3) {
        @apply text-2xl font-semibold mb-4 capitalize;
    }

    :global(p) {
        @apply my-4;
    }

    :global( html, body) {
        /*height: 95%;*/
        height: 100%;
        width: 100%;
        margin: 0;
        /*overflow: hidden;*/
    }

    main {
        flex: 1;
        display: flex;
        min-height: 0;
        height: 100%;
        margin: 0;
    }

    nav {
        overflow: auto;
        width: 400px;
        padding: 1em;
        border-right: #dddddd 1px solid;
        box-shadow: #dddddd 0px 0px 2px;
        background: rgba(198, 203, 209, 0.25);
    }

    article {
        width: 100%;
        overflow: auto;
        padding: 1em;
        padding-left: 2em;
    }

    li a {
        @apply text-cyan-700 block py-1 ml-5 capitalize;
    }
    ul{@apply mb-4;}

    .isActive2 {
        font-weight: bold;
        background: rgba(236, 254, 255, 0.8);
        @apply rounded flex content-start items-center;
    }
</style>