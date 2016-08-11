       $(function () {
            var options = {
            };
            $('.grid-stack').gridstack(options);

            new function () {
                this.serializedData = [
                    {x: 1, y: 0, width: 2, height: 2},
                    {x: 3, y: 1, width: 1, height: 2},
                    {x: 4, y: 1, width: 1, height: 1},
                    {x: 2, y: 3, width: 3, height: 1},
                    {x: 1, y: 4, width: 1, height: 1},
                    {x: 1, y: 3, width: 1, height: 1},
                    {x: 2, y: 4, width: 1, height: 1},
                    {x: 2, y: 5, width: 1, height: 1}
                ];

                this.grid = $('.grid-stack').data('gridstack');

                this.loadGrid = function () {
                    this.grid.removeAll();
                    var items = GridStackUI.Utils.sort(this.serializedData);
                    _.each(items, function (node) {
                        this.grid.addWidget($('<div><div class="grid-stack-item-content">Content Div  <svg id="test1"></svg>  </div></div>'),
                            node.x, node.y, node.width, node.height);
                    }, this);
                    return false;
                }.bind(this);

                this.saveGrid = function () {
                    this.serializedData = _.map($('.grid-stack > .grid-stack-item:visible'), function (el) {
                        el = $(el);
                        var node = el.data('_gridstack_node');
                        return {
                            x: node.x,
                            y: node.y,
                            width: node.width,
                            height: node.height
                        };
                    }, this);
                    $('#saved-data').val(JSON.stringify(this.serializedData, null, '    '));
                    return false;
                }.bind(this);

                this.clearGrid = function () {
                    this.grid.removeAll();
                    return false;
                }.bind(this);

                $('#save-grid').click(this.saveGrid);
                $('#load-grid').click(this.loadGrid);
                $('#clear-grid').click(this.clearGrid);

                this.loadGrid();
            };
        });






    nv.addGraph({
        generate: function() {
            var width = 400;
               var height = 400;

            var chart = nv.models.lineChart()
                .width(width)
                .height(height)
                .margin({right: 20, bottom: 20, left: 20});

            chart.dispatch.on('renderEnd', function(){
                console.log('render complete');
            });

            d3.select('#test1')
                .attr('width', width)
                .attr('height', height)
                .datum(sinAndCos())
                .call(chart);

            return chart;
        },
        callback: function(graph) {
            window.onresize = function() {
                var width = nv.utils.windowSize().width - 40,
                    height = nv.utils.windowSize().height - 40,
                    margin = graph.margin();

                if (width < margin.left + margin.right + 20)
                    width = margin.left + margin.right + 20;

                if (height < margin.top + margin.bottom + 20)
                    height = margin.top + margin.bottom + 20;

                graph.width(width).height(height);

                d3.select('#test1')
                    .attr('width', width)
                    .attr('height', height)
                    .call(graph);
            };
        }
    });

    function sinAndCos() {
        var sin = [],
            cos = [];

        for (var i = 0; i < 100; i++) {
            sin.push({x: i, y: Math.sin(i/10)});
            cos.push({x: i, y: .5 * Math.cos(i/10)});
        }

        return [
            {
                values: sin,
                key: "Sine Wave",
                color: "#ff7f0e"
            },
            {
                values: cos,
                key: "Cosine Wave",
                color: "#2ca02c",
                strokeWidth: 3
            }
        ];
    }



