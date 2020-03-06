requirejs.config({
    path:{
        main2:"main2"
    }
})

requirejs(["main2","main3"],function(main2,main3){
    main2.gk();
    main3.conname();
})