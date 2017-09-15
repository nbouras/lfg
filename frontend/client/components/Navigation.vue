<template>
    <nav class="navbar navbar-normal navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                    Menu <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand page-scroll" href="#">
                    <i class="fa fa-play-circle"></i> <span class="light">LFG</span>
                </a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
                <ul class="nav navbar-nav">
                    <!-- Hidden li included to remove active class from about link when scrolled up past about section -->
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                      <li v-for="menu in menus" >
                      <a v-bind:href=menu.initialURL> {{menu['title']}} </a>

                      </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>
</template>

<script>

  module.exports = {

   data: function(){
       return{
          menus: [
            {'title':'dashboard', 'initialURL': '/dashboard'},
            {'title':'modules', 'initialURL': '/modules'},
            {'title':'transactions', 'initialURL': '/transactions'},
            {'title':'roles', 'initialURL': '/roles'},
            {'title':'users', 'initialURL': '/users'},
            {'title':'accessRights', 'initialURL': '/accessrights'},
            {'title':'help', 'initialURL': '/help'}
            ]
       }
   }
}

</script>

<style>

</style>
