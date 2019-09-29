<template>
	<div>
		
	</div>
	
</template>

<script>
	export default{
		name:"del"
	}
</script>

<style scoped>
    .checkout {
        background: lightgrey;
        height: 100%;
    }
    .address {
        height: 1rem;
        background: white;
        box-shadow: 0px 0px 5px lightgrey;
        text-align: center;
    }

    .paychannel{
        background: white;
        margin: 0.2rem;

    }

    ul {
        list-style: none;
    }

    ul li {
        height: 1rem;
        border-bottom: solid 1px lightgrey;
        line-height: 1rem;
    }

    ul li input {
        float: right;
        font-size: 0.3rem;
        width: 50px;
        height: 50px;
    }

    footer {
        box-shadow: 0px 0px 5px lightgrey;
        position: absolute;
        background: white;
        width: 100%;
        height: 1rem;
        bottom: 0;
    }
    footer button {
        float: right;
        background: orangered;
        font-size: 0.5rem;
        padding: 0.1rem;
    }
</style>
